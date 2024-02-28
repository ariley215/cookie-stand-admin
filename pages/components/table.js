
export default function ReportTable(props) {
    if (props.reports.length === 0) {
        return <p>No Cookie Stands Available</p>
    }

    const headers = ['Location', ...props.hours, 'Totals'];

    return (
        <table className="w-3/4 mx-auto my-4 bg-green-300 rounded-lg">
            <HeaderRow headers={headers} />

            <tbody>
                {props.reports.map((report, index) => {
                    return <ReportRow key={index} report={report} />;
                })}
            </tbody>
            <FooterRow reports={props.reports} />
        </table>
    );
}

function HeaderRow({ headers}) {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => {
                    return <th key={index}>{header}</th>;
                })}
            </tr>
        </thead>
    );
}