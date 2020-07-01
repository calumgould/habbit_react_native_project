import AppleHealthKit from 'rn-apple-healthkit';
import Database from '../Database.js';
import { log } from 'react-native-reanimated';

const db = new Database();

export const getHealthKitSteps = (user) => {

    console.log('GET HEALTH KIT STEPS>>>>>>>>', user);
    

    const PERMS = AppleHealthKit.Constants.Permissions;

    const healthKitOptions = {
        permissions: {
            read: [
                PERMS.StepCount,
                PERMS.Steps,
            ],
            write: [
                PERMS.StepCount
            ],
        }
    };

    AppleHealthKit.initHealthKit(healthKitOptions, (err, results) => {
        if (err) {
            console.log("error initializing Healthkit: ", err);
            return;
        }

        AppleHealthKit.getStepCount(null, (err, results) => {
            if (err) {
                console.log('HEALTHKITSSTEPSERROR>>>>>>', err);
                return;
            }
            console.log('GET STEP COUNT SUCCESSFUL>>>>>>>');
            
            let updatedUser = {
                ...user,
                dailySteps: results.value
            }

            console.log('RESULTS VALUE>>>>>>>', results.value);
            console.log('UPDATED USER>>>>>>>', updatedUser);

            getStepsSinceLastLogin(user, updatedUser)
        });
    });
}

const getStepsSinceLastLogin = (user, updatedUser) => {

    const lastLoginDate = new Date(user.lastLogin);
    const lastLoginStartOfDay = new Date(lastLoginDate).toISOString();

    const options = {
        startDate: lastLoginStartOfDay,
        endDate: new Date().toISOString(),
        includeManuallyAdded: true,
    };

    AppleHealthKit.getDailyStepCountSamples(options, (err, results) => {
        if (err) {
            return;
        }
        const stepsSinceLastLogin = results.reduce((prev, cur) => {
            return prev + cur.value;
        }, 0);

        let updatedUser2 = {
            ...updatedUser,
            totalSteps: (parseInt(user.totalSteps) + stepsSinceLastLogin).toString(),
            lastLogin: options.endDate
        }
        console.log('UPDATED USER UPDATED USER>>>>>>', updatedUser2)
        db.updateUser(user.userId, updatedUser2)
    });
}

export const getInitialSteps = ({setInitialSteps}) => {

    const PERMS = AppleHealthKit.Constants.Permissions;

    const healthKitOptions = {
        permissions: {
            read: [
                PERMS.StepCount,
                PERMS.Steps,
            ],
            write: [
                PERMS.StepCount
            ],
        }
    };

    AppleHealthKit.initHealthKit(healthKitOptions, (err, results) => {
        if (err) {
            console.log("error initializing Healthkit: ", err);
            return;
        }

        console.log('HEALTH KIT INITIALIZED>>>>>>>');

        AppleHealthKit.getStepCount(null, (err, results) => {
            if (err) {
                console.log('ERROR>>>>>>>>', err);
                return 0;
            }
            setInitialSteps(results.value)
        });
    });
}
