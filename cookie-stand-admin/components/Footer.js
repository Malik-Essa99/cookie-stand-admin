export default function Footer({CookieStands}) {
    return (
      <footer className="p-4 text-center text-white bg-green-500">
        <p>{CookieStands.length} Locations Worldwide</p>
        &copy; Malik Alhudrub 2023
      </footer>
    );
  }