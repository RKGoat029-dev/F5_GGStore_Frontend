const Product = ({ product }) => (
    <div className="card-content flex justify-center items-center">
      <Card className="w-96 card flex justify-center items-center">
        <CardHeader color="blue-gray" className="h-56">
          <img src={product.imageUrl} alt={product.title} />
        </CardHeader>
        <CardBody>
          <div className="title">
            <h3>{product.title}</h3>
          </div>
          <section>
            <p className="price">{product.price}</p>
            <p className="category">{product.genre}</p>
          </section>
        </CardBody>
        <CardFooter className="pt-5 card-footer">
          <Link to={product.detailUrl}>
            <Button>Read More</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );