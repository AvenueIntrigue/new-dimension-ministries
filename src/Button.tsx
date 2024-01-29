

interface ButtonProps {

    name: string;


};




function Button(props: ButtonProps) {




    return (

        <div className="b-container">

            <div className="box">
                <h2>{props.name}</h2>
            </div>

        </div>
    )
}

export default Button;