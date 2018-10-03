<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>
    <title>File uploader</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Main CSS -->
    <!--<link rel="stylesheet" href="css/style.css">-->
    
</head>

<body>
<h1>UploadPage</h1>
<form action="/display" method="post" enctype="multipart/form-data">
	<input type="file" name="file">
	<button type="submit">View file</button>
</form>

<script type="text/javascript">console.log(file);</script>



</body>
</html>