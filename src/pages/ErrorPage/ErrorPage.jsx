import { Button, EmptyTitle, ImgEmptyFav, WrapperLink } from "./ErrorPage.styled";


const ErrorPage = () => {
  return (
    <WrapperLink>
    <EmptyTitle>Favorite is empty.</EmptyTitle>
    <ImgEmptyFav alt="favorite-is-empty" />
    <Button to={'/catalog'}>Go to catalog</Button>
  </WrapperLink>
  );
};

export default ErrorPage;
