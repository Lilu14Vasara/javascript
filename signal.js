<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trafic Signal Table</title>
    <style>

     table{
        size: 200px;
        border-color: white;
        border: solid;
        
     }
     #display{
        background-color: white;
        border-left: none;
        border-right: none;
        border: none;
     }

    .color{
        border-radius:3px;
    }

     #middle{
       
     }
     #colorG{
        background-color: green;
        opacity: 0.3;

     }
     #colorR{
        background-color: red;
        opacity: 0.3;

     }
     #colorY{
       background-color: yellow;
       opacity: 0.3;
     }
    </style>
</head>
<body>


    <table border="1px">

        <tr>
            <td rowspan="2" colspan="2" id="display"></td>
            <td colspan="3">N</td>
            <td rowspan="2" colspan="2" id="display"></td>
        </tr>
        <tr>
            <td id="colorG" class="color" >G</td>
            <td id="colorR" class="color">R</td>
            <td id="colorY" class="color">Y</td>
        </tr>
     
        <tr>
            <td rowspan="3">W</td>
            <td id="colorG">G</td>
            <td colspan="3" rowspan="3"  id="middle" ></td>
            <td id="colorG" class="color">G</td>
            <td rowspan="3">S</td>
        </tr>
        <tr>
            <td id="colorR" class="color">R</td>
            <td id="colorR" class="color">R</td>
        </tr>
        <tr>
            <td id="colorY" class="color">Y</td>
            <td id="colorY" class="color">y</td>
        </tr>
        <tr>
            <td rowspan="2" colspan="2" id="display"></td>
            <td id="colorG" class="color">G</td>
            <td id="colorR" class="color">R</td>
            <td id="colorY" class="color">Y</td>
            <td rowspan="2" colspan="2" id="display"></td>
        </tr>
        <tr>
            <td colspan="3">E</td>
        </tr>
    </table>
</body>
</html>
