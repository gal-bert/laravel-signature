var canvasEmployee;
var canvasCustomer
var container;
var contextEmployee;
var contextCustomer;
var isDrawing = false;


document.getElementById('clearCanvasEmployee').addEventListener("click", function() {
    contextEmployee.clearRect(0, 0, canvasEmployee.width, canvasEmployee.height);
});

document.getElementById('clearCanvasCustomer').addEventListener("click", function() {
    contextCustomer.clearRect(0, 0, canvasCustomer.width, canvasCustomer.height);
});


function setSize() {
    canvasEmployee.width = container.offsetWidth;
    canvasEmployee.height = window.innerHeight / 3;

    canvasCustomer.width = container.offsetWidth;
    canvasCustomer.height = window.innerHeight / 3;

    contextEmployee.clearRect(0, 0, canvasEmployee.width, canvasEmployee.height);
    contextCustomer.clearRect(0, 0, canvasCustomer.width, canvasCustomer.height);

}

window.addEventListener('resize', setSize);

window.onload = function() {

    container = document.getElementById('container');

    canvasEmployee = document.getElementById('canvasEmployee');
    canvasCustomer = document.getElementById('canvasCustomer');

    contextEmployee = canvasEmployee.getContext('2d');
    contextCustomer = canvasCustomer.getContext('2d');

    this.setSize();

    contextEmployee.strokeStyle = "#000000";
    contextEmployee.lineWidth = 2;

    contextCustomer.strokeStyle = "#000000";
    contextCustomer.lineWidth = 2;

    // * -- MARK: Desktop Behaviour
    canvasEmployee.onmousedown = startDrawing;
    canvasEmployee.onmouseup = stopDrawing;
    canvasEmployee.onmousemove = draw;

    canvasCustomer.onmousedown = startDrawing;
    canvasCustomer.onmouseup = stopDrawing;
    canvasCustomer.onmousemove = draw;

    // * -- MARK: Mobile Behaviour
    canvasEmployee.ontouchstart = startDrawing;
    canvasEmployee.ontouchend = stopDrawing;
    canvasEmployee.ontouchmove = draw;

    canvasCustomer.ontouchstart = startDrawing;
    canvasCustomer.ontouchend = stopDrawing;
    canvasCustomer.ontouchmove = draw;

    function startDrawing(e) {
        isDrawing = true;
        contextEmployee.beginPath();
        contextEmployee.moveTo(e.pageX - canvasEmployee.offsetLeft, e.pageY - canvasEmployee.offsetTop);

        contextCustomer.beginPath();
        contextCustomer.moveTo(e.pageX - canvasCustomer.offsetLeft, e.pageY - canvasCustomer.offsetTop);
    }

    function draw(e) {
        if (isDrawing == true) {
            var x = e.pageX - canvasEmployee.offsetLeft;
            var y = e.pageY - canvasEmployee.offsetTop;

            contextEmployee.lineTo(x, y);
            contextEmployee.stroke();

            var a = e.pageX - canvasCustomer.offsetLeft;
            var b = e.pageY - canvasCustomer.offsetTop;

            contextCustomer.lineTo(a, b);
            contextCustomer.stroke();

        }
    }

    function stopDrawing() {
        isDrawing = false;

        var imageEmployee = new Image();
        imageEmployee.src = canvasEmployee.toDataURL("image/png");
        document.getElementById('employeeSignature').value = imageEmployee.src.toString();
        console.log("Emp" + imageEmployee.src.toString());

        var imageCustomer = new Image();
        imageCustomer.src = canvasCustomer.toDataURL("image/png");
        document.getElementById('customerSignature').value = imageCustomer.src.toString();
        console.log("Cust" + imageCustomer.src.toString());

    }

}
