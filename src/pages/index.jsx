import styles from './index.less';
import HomeBanner from './Home/HomeBanner';
import HomeStatistic from './Home/homestatistic';

export default function IndexPage() {
  return (
    <div>
      <HomeBanner/>
      <HomeStatistic/>
    </div>
  );
}
