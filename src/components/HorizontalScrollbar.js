import React, {useContext} from 'react';
import { Box, Typography} from '@mui/material';
import { ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isbodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
       {data.map((item) => (
         <Box
           key={item.id || item}
           itemId={item.id || item}
           title ={item.id || item}
           m= "0 40px"
         >
           { isbodyParts ? <BodyPart item={item}  bodyPart={ bodyPart} setBodyPart={setBodyPart} />
             :<ExerciseCard exercise ={item} />
          }
         </Box>
       )
    )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar