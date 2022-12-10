import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={500}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={9}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=300"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <Avatar
            alt="Anastasiya Gepp"
            src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Criativithy"
            src="https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Hannah Nelson"
            src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Christina Morillo"
            src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar alt="" />
          <Avatar alt="" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100}>
          Latest Picturs
        </Typography>
        <ImageList cols={3} rowHeight={230} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/9818645/pexels-photo-9818645.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/4668244/pexels-photo-4668244.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3863792/pexels-photo-3863792.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/9304725/pexels-photo-9304725.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/5338279/pexels-photo-5338279.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/4321027/pexels-photo-4321027.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100}>
          Latest Convertations
        </Typography>
      </Box>
    </Box>
  );
};

export default RightBar;
