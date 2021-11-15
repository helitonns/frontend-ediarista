import Advantages from "@partials/index/_advantages";
import FrequentQuestion from "@partials/index/_frequent-question";
import Presentation from "@partials/index/_presentation";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: "",
        },
    };
};

export default function Index() {
    return (
        <div>
            <Presentation />
            <Advantages />
            <FrequentQuestion />
        </div>
    );
}
