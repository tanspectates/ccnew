import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Trail Runners — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="trail-runners"
      title={
        <>
          OFF THE
          <br />
          <em>PATH.</em>
        </>
      }
      blurb="Grip for mud, rocks, and the occasional bad life choice on a hike."
    />
  );
}
