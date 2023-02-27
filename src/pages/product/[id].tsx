import { Title, Text, DescriptionContainer, DescriptionTitle, Image, Bold, Span, ActionsContainer } from './styles';
import { useLogic } from './logic';
import { Box, Grid } from '@material-ui/core';
import Button from '@/components/Button';
import Select from '@/components/Select';

export default function Home() {
  const {
    product,
    storageList,
    colorList,
    storageSelected,
    colorSelected,
    handleStorageChange,
    handleColorChange,
    handleAddToCart,
  } = useLogic();

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
                <Select label="Storage" options={storageList} value={storageSelected} onSelect={handleStorageChange} />
                <Select label="Color" options={colorList} value={colorSelected} onSelect={handleColorChange} />
                <Button label="Add to cart" size="medium" onClick={handleAddToCart} />
              </ActionsContainer>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
