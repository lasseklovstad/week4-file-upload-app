<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>
    <title>Display file</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


   
    
</head>

<body>


<h1>Filename: ${name}</h1>
<!--
<img src="/getfile" alt="car_image"/>

-->

<iframe src="/getfile" type="application/pdf" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>


</body>
</html>