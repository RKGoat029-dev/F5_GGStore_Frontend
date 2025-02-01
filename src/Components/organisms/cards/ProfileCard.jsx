import { Card, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";
import "./profile-card.css";
import { Link } from "react-router-dom";
import Dragon from "../../../assets/images/Dragon-Ball-Xenoverse.jpg"

const ProfileCard = () => {
    
    const games = [
        {
          id: 1,
          title: "GAME TITLE",
          price: "PRICE",
          genre: "GAME GENRE",
          imageUrl: Dragon,
          detailUrl: "/product-grid"
        },
        {
          id: 2,
          title: "GAME TITLE",
          price: "PRICE",
          genre: "GAME GENRE",
          imageUrl: "https://picsum.photos/390/300",
          detailUrl: "/product-detail"
        },
        {
          id: 3,
          title: "GAME TITLE",
          price: "PRICE",
          genre: "GAME GENRE",
          imageUrl: "https://picsum.photos/390/300",
          detailUrl: "/product-detail"
        },
        {
          id: 4,
          title: "GAME TITLE",
          price: "PRICE",
          genre: "GAME GENRE",
          imageUrl: "https://picsum.photos/390/300",
          detailUrl: "/product-detail"
        }
      ];
    
    
    
    
    
    
    return (
        <>
            <div className="card-content flex justify-center items-center">
                <Card className=" w-96 card flex justify-center items-center">
                    <CardHeader color="blue-gray" className=" h-56">
                        <img src={Dragon} alt="" />
                    </CardHeader>
                    <CardBody>
                        <div className="title">
                            <h3>GAME TITLE</h3>
                        </div>
                        <section>
                            <p className="price">PRICE</p>
                            <p className="category">GAME GENRE</p>
                        </section>
                    </CardBody>
                    <CardFooter className="pt-5 card-footer ">
                    <Link to="/product-grid"> <Button>Read More</Button>
                    </Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="card-content flex justify-center items-center">
                <Card className=" w-96 card flex justify-center items-center">
                    <CardHeader color="blue-gray" className=" h-56">
                        <img src="https://picsum.photos/390/300" alt="" />
                    </CardHeader>
                    <CardBody>
                        <div className="title">
                            <h3>GAME TITLE</h3>
                        </div>
                        <section>
                            <p className="price">PRICE</p>
                            <p className="category">GAME GENRE</p>
                        </section>
                    </CardBody>
                    <CardFooter className="pt-5 card-footer ">
                    <Link to="/product-detail"> <Button>Read More</Button>
                    </Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="card-content flex justify-center items-center">
                <Card className=" w-96 card flex justify-center items-center">
                    <CardHeader color="blue-gray" className=" h-56">
                        <img src="https://picsum.photos/390/300" alt="" />
                    </CardHeader>
                    <CardBody>
                        <div className="title">
                            <h3>GAME TITLE</h3>
                        </div>
                        <section>
                            <p className="price">PRICE</p>
                            <p className="category">GAME GENRE</p>
                        </section>
                    </CardBody>
                    <CardFooter className="pt-5 card-footer ">
                    <Link to="/product-detail"> <Button>Read More</Button>
                    </Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="card-content flex justify-center items-center">
                <Card className=" w-96 card flex justify-center items-center">
                    <CardHeader color="blue-gray" className=" h-56">
                        <img src="https://picsum.photos/390/300" alt="" />
                    </CardHeader>
                    <CardBody>
                        <div className="title">
                            <h3>GAME TITLE</h3>
                        </div>
                        <section>
                            <p className="price">PRICE</p>
                            <p className="category">GAME GENRE</p>
                        </section>
                    </CardBody>
                    <CardFooter className="pt-5 card-footer ">
                      <Link to="/product-detail"> <Button>Read More</Button>
                       </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default ProfileCard;