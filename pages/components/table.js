
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
        <thead className="bg-green-500">
            <tr>
                {headers.map((header, index) => {
                    let className = '';
                    if (index === 0) {
                        className = 'pl-4';
                    } else if (index === headers.length - 1) {
                        className = 'pr-4';
                    }
                    return <th key={index}>{header}</th>;
                })}
            </tr>
        </thead>
    );
}

function ReportRow({ reports }) {
    const cellValues = ['Totals'];

    let megaTotal = 0;

    for (let i in reports[0].hourly_sales) {

        let hourlyTotal = 0;

        for (let report of reports) {
            hourlyTotal += report.hourly_sales[i];
        }

        cellValues.push(hourlyTotal);

        megaTotal += hourlyTotal;
    }

    cellValues.push(megaTotal);

}