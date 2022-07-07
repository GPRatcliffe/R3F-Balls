import { Canvas } from "react-three-fiber"
import Ball from "./components/ball/ball"

const App = () => {

    return (
        <>
            <div id="canvasContainer">
                <Canvas camera={{ position: [0, 12, 30] }}>
                    <Ball color={0xCC2936} position={[4, 0, 8]} />
                    <Ball />
                    <ambientLight color={0xFFFFFF} intensity={0.3} />
                    <spotLight 
                        color="#FFF" 
                        position={[10, 20, 10]}
                        intensity={1}
                    /> 
                </Canvas>
            </div>
        </>
    )
}

export default App