interface Props {
    loading: boolean
}

const Loading = ({ loading }: Props) => {
    return (
        <div className={loading ? 'showLoader' : 'hiddenLoader'}>
            <style jsx>{`
                .hiddenLoader {
                    display: none;
                }
                .showLoader {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: white;
                    z-index: 999999 !important;
                }
            `}</style>
        </div>
    )
}

export default Loading