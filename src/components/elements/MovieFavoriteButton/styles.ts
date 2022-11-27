import {styled} from "@mui/material";
import {FavoriteBorderOutlined, FavoriteOutlined} from "@mui/icons-material";

export const LikedIcon = styled(FavoriteOutlined)(({ theme }) => ({
  fontSize: 40,
  color: 'rgb(229, 9, 20)'
}));
export const LikeIcon = styled(FavoriteBorderOutlined)(({ theme }) => ({
  fontSize: 40,
  color: theme.colors.white
}));
