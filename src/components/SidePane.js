import React from 'react'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
    },
});
const SidePane = () =>
{
    const classes = useStyles();

    return (

        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >

            <TreeItem nodeId="1" label="Number">

                <TreeItem nodeId="2" label="one" onClick={()=>{alert('hello')}} />
                <TreeItem nodeId="3" label="two" />
                <TreeItem nodeId="4" label="three" />
                
            </TreeItem>

        </TreeView>
    )
}

export default SidePane
