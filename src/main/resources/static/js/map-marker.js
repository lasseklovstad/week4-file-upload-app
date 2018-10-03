var bounds,infoWin,lvc,map,mapOptions,nePoint,swPoint,whiteStyle;
swPoint=new google.maps.LatLng(GAME_SW_BOUND[0],GAME_SW_BOUND[1]);
nePoint=new google.maps.LatLng(GAME_NE_BOUND[0],GAME_NE_BOUND[1]);
bounds=new google.maps.LatLngBounds(swPoint,nePoint);
mapOptions={styles:STYLE,center:new google.maps.LatLng(GAME_CENTER[0],GAME_CENTER[1]),zoom:15};map=new google.maps.Map($('#killMap').get(0),mapOptions);
lvc=map.getCenter();google.maps.event.addListener(map,'center_changed',function(e){var nc;
nc=map.getCenter();if(bounds.contains(nc)){return lvc=nc;}else{return map.panTo(lvc);}});
infoWin=new google.maps.InfoWindow();
$.get("data/kills/").done(function(data){var content,i,k,killDT,len,marker,markers;markers=[];
for(i=0,len=data.length;
    i<len;i++){k=data[i];
    k.date=new Date(k.date);
    if(k.location!==null)
    {marker=new google.maps.Marker(
        {map:map,icon:'/static/img/skull.png',position:new google.maps.LatLng(k.location[0],k.location[1])});
    killDT=moment(k.date).format('D/M/YY h:mm:ss A')
    ;content=$("<ul style='color:black'> <li><b>Killer:</b> "+k.killer+"</li> <li><b>Victim:</b> "+k.victim+"</li> <li><b>Date:</b> "+killDT+"</li> <li><a href=\"/kill/"+k.id+"/\" target='_blank' style='font-weight: bold; " +
        "color:black;'>Details</a></li> </ul>");
    content.css('width','300px');
    markers.push([marker,k]);
    google.maps.event.addListener(marker,'click',(function(marker,content){return function(){infoWin.setContent(content);
    return infoWin.open(map,marker);};})(marker,content.get(0))
    );
    }}
    return $('#mapTimeFilters label').click(function(e){var hours,inp,now;inp=$(this).children('input');if(inp.val()==='all'){markers.forEach(function(o){return o[0].setVisible(true);});}else if(inp.val()==='none'){return markers.forEach(function(o){return o[0].setVisible(false);});}else if(inp.val()==='my-kills'){return markers.forEach(function(o){if(o[1].killer===PLAYER_NAME){return o[0].setVisible(true);}else{return o[0].setVisible(false);}});}else{hours=parseInt(inp.val());now=Date.now();return markers.forEach(function(o){var m;m=o[0];k=o[1];if(now-k.date.getTime()<=hours*3600*1000){return m.setVisible(true);}else{return m.setVisible(false);}});}});});$.get("data/missions/").done(function(data){var content,endDT,i,k,len,marker,markers,redeemString,results;markers=[];results=[];for(i=0,len=data.length;i<len;i++){k=data[i];if(k.location!==null){marker=new google.maps.Marker({map:map,icon:new google.maps.MarkerImage(k.img,null,null,null,new google.maps.Size(32,32)),position:new google.maps.LatLng(k.location[0],k.location[1])});endDT=moment(k.end_date).format('D/M/YY h:mm:ss A');redeemString="ERROR";if(k.rtype==='H'){redeemString="Human Only";}
    if(k.rtype==='Z'){redeemString="Zombie Only";}
    if(k.rtype==='A'){redeemString="All Players";}
    content=$("<ul style='color:black'> <li><b>Mission:</b> "+k.name+"</li> <li><b>Where:</b> "+k.desc+"</li> <li><b>End Date:</b> "+endDT+"</li> <li><b>For:</b> "+redeemString+"</li> </ul>");content.css('width','300px');markers.push([marker,k]);results.push(google.maps.event.addListener(marker,'click',(function(marker,content){return function(){infoWin.setContent(content);return infoWin.open(map,marker);};})(marker,content.get(0))));}else{results.push(void 0);}}
    return results;});whiteStyle={color:"white"};$.get("data/humans-per-hour/").done(function(data){return $("#hphChart").highcharts({chart:{type:'line',backgroundColor:'#333',zoomType:'xy'},colors:['#7cb5ec','#4369FF','#90ed7d','#f7a35c','#8085e9','#f15c80','#e4d354','#FF85e8','#8d4653','#91e8e1','#2397fe','#FF115a','#102bBF'],credits:{enabled:false},legend:{backgroundColor:'white'},title:{text:null},plotOptions:{series:{marker:{enabled:false}}},xAxis:{tickInterval:null,title:{text:'Hours into game',style:whiteStyle},labels:{style:whiteStyle}},yAxis:{title:{text:'# humans',style:whiteStyle},tickInterval:null,labels:{style:whiteStyle}},series:data});});$('#hphcheckAll').click(function(e){var box,chart,i,len,ref,results;chart=$('#hphChart').highcharts();ref=chart.series;results=[];for(i=0,len=ref.length;i<len;i++){box=ref[i];results.push(box.show());}
    return results;});$('#hphuncheckAll').click(function(e){var box,chart,i,len,ref,results;chart=$('#hphChart').highcharts();ref=chart.series;results=[];for(i=0,len=ref.length;i<len;i++){box=ref[i];results.push(box.hide());}
    return results;});$.get("data/kills-by-tod/").done(function(data){return $("#todChart").highcharts({chart:{type:'column',backgroundColor:'#333'},credits:{enabled:false},title:{text:null},legend:{enabled:false},xAxis:{tickInterval:1,title:{text:'Time of Day',style:whiteStyle},labels:{style:whiteStyle},categories:['12a','1a','2a','3a','4a','5a','6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','11p']},yAxis:{title:{text:'cumulative # of kills',style:whiteStyle},tickInterval:1,labels:{style:whiteStyle}},series:[{data:data,color:'#800000',name:'Kills'}]});});