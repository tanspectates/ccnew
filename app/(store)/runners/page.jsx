import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Runners — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="runners"
      title={
        <>
          FIND YOUR
          <br />
          <em>PROBLEM.</em>
        </>
      }
      blurb="Everyday miles, questionable decisions. Built to keep up with both."
    />
  );
}
