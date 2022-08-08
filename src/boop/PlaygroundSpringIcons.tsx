import styled from 'styled-components/macro'
import { animated } from "react-spring";
import useBoop from './useBoop';

type PlaygroundReactSpringProps = {
   
}

export function PlaygroundReactSpring(props: PlaygroundReactSpringProps) {
  const [style, trigger] = useBoop({ y: 3, rotation: 20 });
  const [styleRArrow, triggerRArrow] = useBoop({ x: 8 });
  
  
  return (
    <StyledPlaygroundReactSpring>
      <h1>React Spring useSpring for animating icons</h1>
      
      <button
        // @ts-ignore //TODO:
        onMouseEnter={trigger} // hook using react spring
      >
        Btn text
        <animated.span
         style={{ ...style }}
        >x</animated.span> {/* //target this for animation */}
      </button>

      <button
        // @ts-ignore //TODO:
        onMouseEnter={triggerRArrow} // hook using react spring
      >
        Btn text
        <animated.span
         style={{ ...styleRArrow }}
        >
          {">"}
        </animated.span> {/* //target this for animation */}
      </button>
    </StyledPlaygroundReactSpring>
  )
}

const StyledPlaygroundReactSpring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;
    padding: 16px;
    border-radius: 5px;
    font-weight: 600;
  }

  span {
    margin-left: 16px;
    font-size: 20px;
  }
`
