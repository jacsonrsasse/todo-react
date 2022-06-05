type ButtonAreaProps = {
    buttons: [];
};

export function ButtonArea(props: ButtonAreaProps) {
    return (
        <div>
            {props.buttons.map((button) => {
                return <div></div>;
            })}
        </div>
    );
}
