import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>

            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Top item this month</span><span>Freelancing</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Items</span><span>Rs {groupNumber(455)}</span>
                </div>

                <div className={css.card}>
                    <span>Profit</span><span>Rs {groupNumber(370000)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>Rs {groupNumber(2000)}</span>
                </div>
            </div>


            <StatisticsChart/>
        </div>
    )
}

export default Statistics