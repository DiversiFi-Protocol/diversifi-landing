export default function TwitterIcon({ className = "", ...props }) {
  return (
    <svg
      fill="currentColor"
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L7.71353 3H2L8.72647 13.0074L2 20.9873H3.55353L9.36237 14.7512L14.2865 20.9873H20L13.6819 10.6218ZM10.2211 13.7107L9.46892 12.2241L4.09892 4.16962H6.54453L10.9504 11.1076L11.7026 12.5942L18.6861 19.8835H16.2405L10.2211 13.7107Z" />
    </svg>
  );
}
