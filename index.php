<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./pages/templates/head.php"); ?>
</head>

<body>
    <?php include("./pages/templates/navIndex.php"); ?>
    <?php include("./pages/templates/landing.php"); ?> 

    <footer class="bg-light text-center my-5 text-white">
        <?php include("./pages/templates/footer.php"); ?> 
    </footer> 

   <!-- NAV COLLAPSE BUTTON ON CLICK -->
    <script> 
        let collapseButton = document.querySelector("#navbarNavAltMarkup")
        let collapseNavIfOpen = (e) => {
            if (collapseButton.classList.contains("show"))
                collapseButton.classList.remove("show")
        }
        window.addEventListener("click", collapseNavIfOpen)
    </script> 
      
</body>

</html>
