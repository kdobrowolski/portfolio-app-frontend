
interface Props {
    images?: any,
    opened: boolean
}

export default function Gallery({ images, opened }: Props) {

    function mapImage(image: any) {
        const buffer = image.image.data;
        const b64 = Buffer.from(buffer).toString("base64");
        const mimeType = 'image/png';

        return (<img src={`data:${mimeType};base64,${b64}`} />)
    }
    return (
        <div className={opened ? "opened" : "hidden"}>
            {images.map((image: any) => {
                return ( mapImage(image) )
            })}
        </div>
    )
}