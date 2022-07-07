const Ball = (props) => {
    const { color, position } = props
    return (
        <mesh position={position || [0, 0, 0]}>
            <sphereGeometry args={[3, 45, 45]} />
            <meshPhongMaterial 
                color={color || 0xFBB700}
                specular={0x111111}
                shininess={500}
            />
        </mesh>
    )
}

export default Ball