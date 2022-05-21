import React, {useContext, useEffect} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory, useParams} from "react-router-dom";
import {getAllReportWhere} from "../http/RepostListApi";
import {TABLE_ROUTE} from "../utils/consts";

const ReportTable = observer(() => {
    const {reportTable} = useContext(Context)
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getAllReportWhere(params.report_name).then(data => reportTable.setReportTables(data))
    }, [])

    return (
        <Col className="columnReportTable">
            <Row>
                {reportTable.reportTables.map(report =>
                    <Card
                        key={report.table_name}
                        className="cardReportTable"
                        border="dark"
                        onClick={() => history.push(TABLE_ROUTE + "/" + report.table_name)}
                    >
                        <Card.Text
                            style={{textAlign: "center", cursor: "pointer", padding: "15px"}}
                        >
                            {report.table_name}
                        </Card.Text>
                    </Card>
                )}
            </Row>
        </Col>
    );
});

export default ReportTable;