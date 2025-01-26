import { Card, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";
import "./profile-card.css";

const ProfileCard = () => {
    return (
        <Card className="mt-8 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                {/* GAME COVER */}
            </CardHeader>
            <CardBody>
                <h3>GAME TITLE</h3>
                <section>
                    <p className="price">PRICE</p>
                    <p className="category">GAME GENRE</p>
                </section>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
        </Card>
    );
};

export default ProfileCard;