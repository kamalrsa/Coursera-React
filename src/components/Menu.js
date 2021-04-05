import React, { useState } from "react";
//import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
export default function Menu(props) {
  console.log(props);
  const [dishes, setDishes] = useState([
    {
      id: 0,
      name: "Uthappizza",
      image: "assets/images/uthappizza.png",
      category: "mains",
      label: "Hot",
      price: "4.99",
      description:
        "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
    },
    {
      id: 1,
      name: "Zucchipakoda",
      image: "assets/images/zucchipakoda.png",
      category: "appetizer",
      label: "",
      price: "1.99",
      description:
        "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
    },
    {
      id: 2,
      name: "Vadonut",
      image: "assets/images/vadonut.png",
      category: "appetizer",
      label: "New",
      price: "1.99",
      description:
        "A quintessential ConFusion experience, is it a vada or is it a donut?",
    },
    {
      id: 3,
      name: "ElaiCheese Cake",
      image: "assets/images/elaicheesecake.png",
      category: "dessert",
      label: "",
      price: "2.99",
      description:
        "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
    },
  ]);
  console.log(dishes);

  return (
    <>
      {dishes?.map((item, key) => (
        <div key={item.id}>
          <div className="col-12 col-md-8 m-5">
            <Card>
              <CardImg
                width="100px"
                height="300px"
                top
                src={item.image}
                alt={item.name}
              />

              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
              </CardBody>
              <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
}
