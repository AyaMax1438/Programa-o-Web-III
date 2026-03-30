import hotguys from "../assets/Bakunin_&_Marx_&_malcon_&_sankara.png"
import hotgirls from "../assets/RosaLuxemburgo_&_AngelaDavis_&_LouiseMichel_&_TeresaClaramunt.png"


export default function About() {
    return (
        <div>
            <h1>Sobre</h1>
            <p>
                Mulheres e homens gostosos
            </p>

            <img
                src={hotguys}
                alt="Mikhail Alexandrovich Bakunin, Karl Marx, Malcon X, Thomás Sankara" />

            <img
                src={hotgirls}
                alt="Rosa Luxemburgo, Angela Davis, Louise Michel, Teresa Claramunt" />
        </div>
    )
}