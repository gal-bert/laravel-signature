<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

</head>
<body>

    <div class="container" id="container">

        <h1>Signature</h1>


        <canvas id="canvasEmployee"></canvas>
        <br>
        <button id="clearCanvasEmployee" class="btn btn-primary">Clear Employee Signature</button>

        <hr>

        <canvas id="canvasCustomer"></canvas>
        <br>
        <button id="clearCanvasCustomer" class="btn btn-primary">Clear Customer Signature</button>

        <br>
        <br>
        <br>

        <form action="/preview" method="post" enctype="multipart/form-data">
            @csrf
            <input type="hidden" name="employeeSignature" id="employeeSignature">
            <input type="hidden" name="customerSignature" id="customerSignature">
            <button type="submit" class="btn btn-success">Submit</button>
        </form>


    </div>

    <script src="script.js"></script>
</body>
</html>
