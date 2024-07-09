export default function Job(props) {
    const { job } = props;

    return (
        <div>
            {
                job? job.map((item, index) =>
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <p>{item.position}</p>
                        <p>{item.company}</p>

                    </div>
                ) : <div>No Data found</div>
            }
        </div>
    );
}