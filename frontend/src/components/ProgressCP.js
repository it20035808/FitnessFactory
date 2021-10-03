import React, { useState, useEffect } from "react";
import axios from "axios";
import progress from "../bruce3.jpg";
import diet from "../diet.jpg";

export default function ReadCP() {

    useEffect(() => {
        axios.get('http://localhost:8070/clientplan/').then((response) => {
            setCPList(response.data)
        })

    }, [])

    const [CPList, setCPList] = useState([]);

    const [newWtrng, setWtrng] = useState('');

    return (<div class="container" style={{ backgroundImage: `url(${progress})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '1000px' }}>

      <div> <a href="http://localhost:3000/" class="btn btn-info" role="button" class="btn btn-danger btn-lg btn-block "> Home </a> </div>

        <h2 class="display-3" style={{ color: "white" }} > Progress </h2>

        
        <div id="demo" class="carousel slide" data-ride="carousel">


<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">

      <h3 style={{ color: "white" }}> Client's Diet Information </h3>
      <img class="container"  src={diet} width="600" height="600"/>
   
    <p style={{ color: "white" }}> 

    
    
    </p>
  </div>
  <div class="carousel-item">
   
  <p style={{ color: "white" }}> 

  According to Foxcroft, the word diet comes from the Greek diaita, which represents a notion of a whole way healthy lifestyle including both mental and physical health, rather than a narrow weight-loss regimen.[12]

One of the first dietitians was the English doctor George Cheyne. He himself was tremendously overweight and would constantly eat large quantities of rich food and drink. He began a meatless diet, taking only milk and vegetables, and soon regained his health. He began publicly recommending his diet for everyone suffering from obesity. In 1724, he wrote An Essay of Health and Long Life, in which he advises exercise and fresh air and avoiding luxury foods.[13]

The Scottish military surgeon, John Rollo, published Notes of a Diabetic Case in 1797. It described the benefits of a meat diet for those suffering from diabetes, basing this recommendation on Matthew Dobson's discovery of glycosuria in diabetes mellitus.[14] By means of Dobson's testing procedure (for glucose in the urine) Rollo worked out a diet that had success for what is now called type 2 diabetes.[15]
</p>


  </div>
  <div class="carousel-item">
   
  <p style={{ color: "white" }}> 

Butter is a dairy product made from the fat and protein components of churned cream. It is a semi-solid emulsion at room temperature, consisting of approximately 80% butterfat. It is used at room temperature as a spread, melted as a condiment, and used as an ingredient in baking, sauce making, pan frying, and other cooking procedures.

Most frequently made from cow's milk, butter can also be manufactured from the milk of other mammals, including sheep, goats, buffalo, and yaks. It is made by churning milk or cream to separate the fat globules from the buttermilk. Salt and food colorings are sometimes added to butter. Rendering butter, removing the water and milk solids, produces clarified butter or ghee, which is almost entirely butterfat.

Butter is a water-in-oil emulsion resulting from an inversion of the cream, where the milk proteins are the emulsifiers. Butter remains a firm solid when refrigerated, but softens to a spreadable consistency at room temperature, and melts to a thin liquid consistency at 32 to 35 °C (90 to 95 °F). The density of butter is 911 grams per litre (0.950 lb per US pint).[1] It generally has a pale yellow color, but varies from deep yellow to nearly white. Its natural, unmodified color is dependent on the source animal's feed and genetics, but the commercial manufacturing process commonly manipulates the color with food colorings like annatto[2] or carotene.

</p>

  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>
         
    </div>


    )
}

