import { Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import CustomTable from '../common/Drawer/customTable/customTable'
import { ContextMain } from "../common/Drawer/ContextMain"
import { createTable } from "../common/Drawer/Helperfunction"
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';


class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            value: 1,
        }
    }

    componentDidMount = () => {
        console.log("context", this.context.userData[0].results)

    }

    setAction = (obj) => {
        return (
            <>
                <Chip
                    label="INDIAN"
                    clickable
                    color="primary"
                    variant="outlined"
                />
                <Chip
                    label= "INDIAN MIX"
                    clickable
                    color="secondary"
                    variant="outlined"
                />
            </>
        )
    }

    conDate = (obj) => {
        let dateNew = new Date(obj).toDateString().split(' ').slice(1).join(' ');
        return (
            <Typography component="h4" className="td-font-status">{dateNew}</Typography>
        )
    }

    render() {
        const dataDump = createTable(this.context.userData[0].results, this.setAction, this.conDate)
        return (
            <div>
                <div className="row margin-card">
                    <div className="col-md-3 offset-1 mr-5 radius-card">
                        <Card>
                            <h2 className="header-main">High margin Recipes</h2>
                            <CircularProgress variant="determinate" value={80} className="circular-margin" />
                            <p>80 %</p>
                            <CircularProgress variant="determinate" value={80} className="circular-margin" />
                            <p>80 %</p>
                            <CircularProgress variant="determinate" value={80} className="circular-margin" />
                            <p>80 %</p>
                        </Card>
                    </div>
                    <div className="col-md-3 mr-5 radius-card">
                        <Card>
                            <h2 className="header-main">Low margin Recipes</h2>
                            <CircularProgress variant="determinate" value={48} className="circular-margin" />
                            <p>48 %</p>
                            <CircularProgress variant="determinate" value={25} className="circular-margin" />
                            <p>25 %</p>
                            <CircularProgress variant="determinate" value={15} className="circular-margin" />
                            <p>15 %</p>
                        </Card>
                    </div>
                    <div className="col-md-3 mr-5 radius-card ">
                        <Card>
                            <h2 className="header-main">Top fluctuating Recipes</h2>
                            <CircularProgress variant="determinate" value={5} className="circular-margin" />
                            <p>5 % +ve</p>
                            <CircularProgress variant="determinate" value={3} className="circular-margin" />
                            <p>3 % -ve</p>
                            <CircularProgress variant="determinate" value={8} className="circular-margin" />
                            <p>8 % -ve</p>

                        </Card>
                    </div>
                </div>

                <Card >
                    <CustomTable
                        title=""
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'LAST UPDATE', field: 'last_updated.date' },
                            { title: 'COGS%', field: 'cogs' },
                            { title: 'COST %', field: 'cost_price', },
                            { title: 'SALE PRICE%', field: 'sale_price', },
                            { title: 'CROSS MARGIN%', field: 'gross_margin', },
                            { title: 'TAGS / ACTIONS', field: 'manufacturing_outlet', }
                        ]}

                        data={dataDump}

                        options={{
                            sorting: true,
                            paginationType: "stepped",
                            paging: true,
                            selection: true,
                            filtering: false,
                            showTitle: false,
                            toolbar: true,
                            emptyRowsWhenPaging: false,
                            pageSize: 10,
                        }}
                    />
                </Card>
            </div>
        );
    }
}


HomeScreen.contextType = ContextMain;
export default HomeScreen;

