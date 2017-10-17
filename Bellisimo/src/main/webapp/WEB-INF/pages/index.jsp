<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bellisimo</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/styles.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>


<jsp:include page="_header.jsp" />
<jsp:include page="_menu.jsp" />

<div class="w3-content w3-display-container">
    <img class="mySlides" src="${pageContext.request.contextPath}/images/slide1.jpg" style="width:100%">
    <img class="mySlides" src="${pageContext.request.contextPath}/images/slide2.jpg" style="width:100%">
    <img class="mySlides" src="${pageContext.request.contextPath}/images/slide3.jpg" style="width:100%">
    <img class="mySlides" src="${pageContext.request.contextPath}/images/slide4.jpg" style="width:100%">

    <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
    <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
</div>

<script>
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
</script>


<jsp:include page="_footer.jsp" />

</body>
</html>