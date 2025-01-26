import { Card, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";
import "./profile-card.css";

const ProfileCard = () => {
    return (
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
                    <Button>Read More</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProfileCard;