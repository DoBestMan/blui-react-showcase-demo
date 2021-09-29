import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        buttonGroupContainer: {
            marginBottom: theme.spacing(1),
        },
    })
);

export const OutlinedButtonGroupExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <ButtonGroup variant="outlined">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <ButtonGroup variant="outlined" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Primary
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <ButtonGroup variant="outlined" color="primary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <ButtonGroup variant="outlined" disabled color="primary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Secondary
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <ButtonGroup variant="outlined" color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <ButtonGroup variant="outlined" disabled color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
};
