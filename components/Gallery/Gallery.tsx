import Image from 'next/image';

interface Props {
    images?: any,
    opened: boolean
}

export default function Gallery({ images, opened }: Props) {

    function mapImage(image: any, i: number) {
        const buffer = image.image.data;
        const b64 = Buffer.from(buffer).toString("base64");
        const mimeType = 'image/png';

        return (<Image key={i} src={`data:${mimeType};base64,${b64}`} alt="Gallery image"/>)
    }
    return (
        <div className={opened ? "opened" : "hidden"}>
            {images.map((image: any, i: number) => {
                return ( mapImage(image, i) )
            })}
        </div>
    )
}