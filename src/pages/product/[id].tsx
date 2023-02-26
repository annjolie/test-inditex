import { Title, Text, DescriptionContainer, DescriptionTitle, Image, Bold, Span } from './styles';
import { useLogic } from './logic';
import { Box, Grid } from '@material-ui/core';

export default function Home() {
  const { product } = useLogic();

  return (
    <>
      <main>
        <Title>Details View</Title>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <Image src={product.image} alt={product.name} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ flexDirection: 'column', justifyContent: 'center' }}>
              <DescriptionContainer>
                <DescriptionTitle>DESCRIPTION</DescriptionTitle>
                <Text>
                  <Bold>Product name:</Bold>
                  <Span>{product.name}</Span>
                </Text>
                <Text>
                  <Bold>Model:</Bold>
                  <Span>{product.model}</Span>
                </Text>
                <Text>
                  <Bold>Price:</Bold>
                  <Span>{product.price}</Span>
                </Text>
                <Text>
                  <Bold>CPU:</Bold>
                  <Span>{product.cpu}</Span>
                </Text>
                <Text>
                  <Bold>RAM:</Bold>
                  <Span>{product.ram}</Span>
                </Text>
                <Text>
                  <Bold>OS:</Bold>
                  <Span>{product.os}</Span>
                </Text>
                <Text>
                  <Bold>Screen resolution:</Bold>
                  <Span>{product.screen}</Span>
                </Text>
                <Text>
                  <Bold>Battery:</Bold>
                  <Span>{product.battery}</Span>
                </Text>
                <Text>
                  <Bold>Camera:</Bold>
                  <Span>{product.camera}</Span>
                </Text>
                <Text>
                  <Bold>Dimensions:</Bold>
                  <Span>{product.dimensions}</Span>
                </Text>
                <Text>
                  <Bold>Weight:</Bold>
                  <Span>{product.weight}</Span>
                </Text>
              </DescriptionContainer>
              <ActionsContainer>
                <Button variant="contained" color="primary" onClick={() => {}}>
                  Add to cart
                </Button>
                <Button variant="contained" color="secondary" onClick={() => {}}>
                  Buy now
                </Button>
              </ActionsContainer>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
