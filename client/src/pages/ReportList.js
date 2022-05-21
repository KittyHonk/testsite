import React, {useContext, useEffect} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getAllReport} from "../http/RepostListApi";
import {REPORT_TABLES} from "../utils/consts";
import {useHistory} from "react-router-dom";
import "../styles/Component.css"

const ReportList = observer(() => {
    const {reportList} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        getAllReport().then(data => reportList.setReport(data))
    }, [])

    return (
        <Col className="columnReportList">
            {reportList.reports.map(report =>
                <Row className="rowRepostList" key={report.reports_name}>
                    <Card
                        className="cardReportList"
                        border="dark"
                        onClick={() => history.push(REPORT_TABLES + "/" + report.reports_name)}
                    >
                        <Card.Text
                            style={{textAlign: "center", cursor: "pointer", padding: "15px"}}
                        >
                            {report.reports_name}
                        </Card.Text>
                </Card>
                </Row>
            )}
        </Col>
    );
});

export default ReportList;