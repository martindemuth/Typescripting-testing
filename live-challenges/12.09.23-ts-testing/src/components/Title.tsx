type TitleProps = {
    title: String
    className?: String
}

export default function Title(props: TitleProps) {

    const {title, className} = props

    return <h1 className={className}>{title}</h1>

}