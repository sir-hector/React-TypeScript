type ContainerType = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerType) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}

