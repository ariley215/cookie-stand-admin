
export default function ReportTable(props) {

    if (props.reports.length === 0) {
        return <h2>No Cookie Stands Available</h2>
    }
    if (!Array.isArray(props.reports)) {
        console.error('props.reports is not an array');
        return null; // or return some default JSX
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

function HeaderRow({ headers }) {
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

function ReportRow({ report }) {
    const total = report.hourly_sales.reduce((sum, value) => sum + value, 0);
    const cellValues = [report.location, ...report.hourly_sales, total];

    return (
        <tr>
            {cellValues.map((cell, index) => <td key={index}>{cell}</td>)};
        </tr>
    );
}

function FooterRow({ reports }) {
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

    return (
        <tfoot>
            <tr>
                {cellValues.map((cell, index) => {
                    let className = '';
                    if (index === 0) {
                        className = 'pl-4';
                    } else if (index === cellValues.length - 1) {
                        className = 'pr-4';
                    }
                    return <td key={index}>{cell}</td>;
                })}
            </tr>
        </tfoot>
    );
}