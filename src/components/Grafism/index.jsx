import Image from "next/legacy/image";

const Grafism = ({ width, height, color, className }) => {

    return (      
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 810 809.999993"
      height={height}   
      className={color}   
    >
      <defs>
        <clipPath id="a">
          <path d="M0 78h810v653.96H0zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          fill='currentColor'
          d="M7.398 240.922c1.079.863 2.227 1.797 3.52 2.871l1.078.863c8.402 6.824 20.828 17.024 33.899 24.348 8.257 4.668 18.312 9.625 28.87 14.437a811.912 811.912 0 0037.563 15.872c10.129 4.023 20.973 7.828 31.602 11.347 7.324 2.442 14.507 4.668 21.332 6.75 3.66-1.074 7.18-2.082 10.558-3.086 6.32-1.797 12.567-2.875 18.457-3.734 1.938-.29 3.805-.574 5.672-.863 9.84-1.293 18.602-2.512 25.356-6.32 2.586-1.364 4.593-3.305 6.32-5.532 2.008-2.586 3.66-5.602 5.242-8.617 3.23-6.106 6.535-12.211 13.215-16.23h.07c5.961-3.52 13.36-6.321 21.477-8.548 9.336-2.585 19.535-4.382 29.516-5.53.074-.071.144-.071.218-.071 8.832-1.078 18.887-.36 29.016.36 4.308.284 8.617.644 12.781.788 6.899.286 13.434.145 18.961-1.078 11.637-2.515 23.774-10.558 32.25-16.304l1.004-.645c3.16-2.156 5.746-3.95 7.688-4.957l1.218 2.227 1.149-2.227c1.941 1.008 4.527 2.8 7.687 4.957l1.004.645c8.477 5.746 20.613 13.789 32.246 16.304 5.606 1.223 12.211 1.363 19.18 1.078 4.094-.144 8.328-.504 12.64-.789 10.055-.718 20.11-1.437 28.942-.36.074 0 .144 0 .215.071 9.984 1.149 20.254 2.946 29.52 5.531 8.116 2.227 15.515 5.028 21.476 8.547h.07c6.68 4.02 9.985 10.125 13.215 16.23 1.582 2.872 3.09 5.747 5.027 8.333 1.797 2.297 3.88 4.379 6.535 5.816 6.754 3.809 15.586 5.028 25.356 6.32 2.367.36 4.809.72 7.254 1.079 5.457.86 11.129 1.867 16.875 3.52 3.879 1.077 7.902 2.296 12.066 3.519 7.254-2.156 14.942-4.598 22.77-7.184 10.699-3.52 21.472-7.324 31.672-11.348 11.996-4.738 25.21-10.269 37.492-15.87 10.555-4.813 20.61-9.77 28.941-14.438 13-7.324 25.496-17.524 33.903-24.348l.285-.285c1.008-.793 1.941-1.512 2.8-2.226-1.437-1.153-3.085-2.516-4.882-3.954l-1.438-1.218c-8.332-6.825-19.965-16.16-32.176-23.2-.07 0-.07 0-.144-.07-8.258-4.668-18.313-9.695-28.941-14.582a727.64 727.64 0 00-37.348-15.871l-.07-.07c-10.993-4.383-22.7-8.547-34.118-12.285-11.562-3.805-22.625-7.18-32.175-9.98-8.118-2.302-16.016-3.45-23.414-4.384-10.27-1.437-19.536-2.726-27.149-7.039v.074c-7.039-3.879-10.34-10.129-13.644-16.449-2.946-5.527-5.82-11.058-11.348-14.363-5.531-3.23-12.426-5.89-20.04-8.043-9.12-2.516-19.105-4.309-28.944-5.602-8.332-.933-18.168-.289-27.938.43-3.305.215-6.605.43-9.91.574-8.477.504-16.59.504-23.559-1.004h-.07c-13.074-2.875-26.145-11.78-34.977-17.812-2.37-1.652-4.453-3.09-6.035-4.024-1.652.934-3.664 2.372-6.105 4.024-8.832 6.031-21.903 14.937-34.977 17.812-7.039 1.508-15.226 1.508-23.699 1.004-3.234-.144-6.535-.36-9.77-.574-9.84-.719-19.68-1.363-27.937-.43-9.91 1.293-19.895 3.086-29.016 5.602-7.613 2.152-14.507 4.812-20.039 8.043-5.531 3.305-8.402 8.836-11.347 14.363-3.305 6.32-6.606 12.57-13.575 16.45v-.075c-7.683 4.313-16.949 5.602-27.218 7.04-7.399.933-15.301 2.081-23.414 4.382-9.555 2.8-20.543 6.176-32.176 9.98-11.422 3.739-23.13 7.903-34.117 12.286l-.07.07c-11.923 4.668-24.993 10.2-37.274 15.871-10.633 4.887-20.758 9.914-29.02 14.582-.07.07-.07.07-.14.07-11.852 6.825-23.27 15.946-31.532 22.696l-2.082 1.722c-1.222 1.008-2.37 1.868-3.375 2.73zm795.204 328.152a298.342 298.342 0 01-4.598-3.734 217.356 217.356 0 00-3.59-2.875c-8.113-6.606-18.96-15.082-30.309-21.473-8.332-4.668-18.312-9.625-28.87-14.437a811.912 811.912 0 00-37.563-15.871c-10.129-3.95-20.973-7.829-31.602-11.348-6.75-2.227-13.36-4.309-19.68-6.25-5.312-1.578-10.34-3.016-15.081-4.379-1.868-.504-3.735-1.008-5.532-1.437-5.457 1.148-10.773 1.867-15.726 2.585l-1.508.215c-9.195 1.293-17.453 2.512-23.848 6.106-5.672 3.16-8.617 8.617-11.562 14.219-3.23 6.035-6.535 12.136-13.285 16.16v.07c-5.961 3.45-13.36 6.25-21.477 8.477-9.336 2.586-19.535 4.382-29.52 5.601h-.214c-8.832 1.078-18.887.36-29.016-.36-7.469-.5-14.937-1.077-21.687-.788-3.594.07-6.97.43-10.055 1.078-10.703 2.37-21.836 9.336-30.168 14.867-1.074.79-2.082 1.434-3.086 2.152-3.16 2.086-5.746 3.88-7.688 4.887l-1.218-2.226-1.223 2.226c-1.867-1.008-4.523-2.8-7.613-4.887-1.004-.718-2.082-1.433-3.16-2.152-8.328-5.531-19.391-12.496-30.164-14.867-3.016-.649-6.391-1.008-9.91-1.078-6.75-.29-14.294.289-21.837.789-10.054.718-20.18 1.437-29.015.36h-.14c-9.985-1.22-20.255-3.016-29.594-5.602-8.043-2.227-15.512-5.028-21.473-8.477v-.07c-6.75-4.024-9.985-10.125-13.215-16.16-3.016-5.602-5.96-11.06-11.563-14.22-6.753-3.734-15.585-4.956-25.355-6.32l-.43-.074c-5.386-.719-10.988-1.508-16.804-2.8a124.765 124.765 0 00-7.04 1.726c-4.238 1.219-8.761 2.512-13.503 3.95-6.75 2.011-13.934 4.308-21.188 6.679a658.346 658.346 0 00-31.672 11.348c-11.996 4.738-25.21 10.27-37.562 15.87-10.559 4.813-20.543 9.77-28.871 14.438-11.207 6.32-21.907 14.653-30.024 21.258-1.363 1.078-2.656 2.082-3.879 3.09a67.653 67.653 0 01-3.086 2.512c1.079.863 2.297 1.867 3.59 2.945l1.223 1.004c8.402 6.898 20.754 17.023 33.684 24.422.07 0 .07.07.144.07 8.258 4.668 18.313 9.695 28.941 14.582a727.64 727.64 0 0037.348 15.871l.07.07c10.993 4.383 22.7 8.547 34.118 12.282 11.562 3.879 22.625 7.183 32.175 9.984 8.118 2.371 16.016 3.45 23.34 4.453 10.344 1.363 19.61 2.656 27.223 6.965 7.039 3.879 10.34 10.129 13.644 16.379 2.875 5.457 5.82 10.988 11.348 14.289 5.531 3.305 12.426 5.96 20.04 8.117 9.05 2.516 19.105 4.309 28.944 5.531 8.403 1.079 18.313.36 28.153-.359 3.375-.215 6.75-.504 9.984-.648 8.403-.43 16.375-.43 23.27 1.078 13.07 2.8 26.215 11.777 35.047 17.812 2.37 1.653 4.453 3.09 6.035 4.024 1.652-.934 3.664-2.371 6.031-4.024 8.906-6.035 21.977-15.011 35.05-17.812 6.895-1.508 15.012-1.508 23.415-1.078 3.23.144 6.535.433 9.84.648 9.91.719 19.82 1.438 28.152.36 9.84-1.223 19.895-3.016 29.016-5.532 7.613-2.156 14.507-4.812 20.039-8.117 5.457-3.3 8.402-8.832 11.347-14.29 3.305-6.25 6.606-12.5 13.575-16.378 7.683-4.309 16.879-5.602 27.218-6.965 7.328-1.004 15.227-2.082 23.344-4.453 9.625-2.8 20.613-6.105 32.246-9.984 11.422-3.735 23.13-7.899 34.117-12.282l.07-.07c11.923-4.668 24.993-10.2 37.274-15.871 10.633-4.887 20.688-9.914 29.02-14.582 0 0 .07-.07.14-.07 12.93-7.399 25.282-17.524 33.614-24.422l.574-.43c1.008-.789 1.941-1.578 2.8-2.297zm-192.192-84.46l-2.586-.36c-10.27-1.438-19.535-2.73-27.078-6.895-5.098-2.804-8.187-6.824-10.773-11.132-1.004-1.727-1.938-3.45-2.871-5.172-2.875-5.457-5.82-10.918-11.348-14.223-5.602-3.23-12.57-5.887-20.184-7.969-9.047-2.515-19.03-4.238-28.8-5.386-.07-.075-.141-.075-.215-.075-8.332-1.004-18.172-.285-28.008.36l-1.652.144c-11.278.79-22.41 1.438-31.532-.504h-.07c-13.074-2.87-26.215-11.777-35.05-17.812-2.372-1.578-4.38-2.942-5.962-3.95-1.652 1.008-3.664 2.372-6.031 4.024-8.836 5.961-21.977 14.867-35.05 17.738-9.048 1.942-20.04 1.293-31.098.504l-2.157-.144c-9.84-.645-19.675-1.364-28.007-.36 0 0-.075 0-.145.075-9.84 1.148-19.824 2.87-28.871 5.386-7.613 2.082-14.582 4.739-20.184 7.969-5.531 3.305-8.402 8.766-11.347 14.223-1.004 1.937-2.012 3.804-3.16 5.672-2.512 4.168-5.602 7.902-10.415 10.632-7.613 4.164-16.879 5.457-27.148 6.895l-1.078.14c.863.145 1.726.22 2.586.36 2.875.433 5.676.793 8.332 1.223 6.969 1.148 13.289 2.656 18.746 5.671 6.965 3.88 10.27 10.055 13.644 16.305 2.875 5.457 5.82 10.918 11.278 14.223h.07c5.531 3.23 12.57 5.886 20.184 7.969 8.976 2.515 18.96 4.238 28.8 5.46h.215c8.258 1.004 18.172.36 28.008-.359 3.305-.215 6.61-.504 9.84-.648 8.406-.43 16.45-.5 23.344 1.007 13.144 2.872 26.215 11.778 35.12 17.813 2.372 1.578 4.38 2.941 5.962 3.95a382.11 382.11 0 006.031-3.95c8.836-6.035 21.977-14.941 35.05-17.813 6.966-1.507 15.083-1.437 23.485-1.007 3.23.144 6.465.433 9.695.648 9.915.719 19.75 1.363 28.012.36h.215c9.84-1.223 19.824-2.946 28.8-5.461 7.684-2.082 14.653-4.739 20.255-7.97 5.531-3.304 8.402-8.765 11.347-14.222 3.305-6.25 6.606-12.426 13.575-16.305 5.027-2.726 10.699-4.234 16.949-5.312 3.23-.649 6.68-1.078 10.199-1.582zm-206.129-75.919l1.149-2.226c1.941 1.008 4.527 2.8 7.687 4.886l1.219.86c8.476 5.746 20.469 13.648 32.031 16.16 5.246 1.148 11.278 1.293 17.742 1.078 4.524-.144 9.336-.43 14.079-.789 10.054-.719 20.109-1.437 28.94-.36h.216c9.984 1.22 20.254 3.016 29.52 5.602 8.116 2.227 15.515 5.028 21.476 8.473v.074h.07c6.68 4.02 9.985 10.125 13.215 16.23 2.012 3.735 4.023 7.47 6.895 10.489 1.293 1.433 2.875 2.656 4.668 3.66 6.32 3.52 14.367 4.813 23.343 6.035l2.012.285c5.457.79 11.273 1.582 17.234 2.875 2.301-.504 4.668-1.078 6.97-1.726h.07c10.343-2.871 22.335-6.535 34.69-10.63 10.63-3.519 21.473-7.323 31.673-11.347 11.996-4.738 25.21-10.27 37.562-15.87 10.485-4.813 20.54-9.77 28.871-14.438 13-7.399 25.496-17.524 33.903-24.348l.285-.285c1.363-1.078 2.586-2.082 3.734-3.02a224.617 224.617 0 01-5.531-4.449c-1.074-.863-2.223-1.797-3.445-2.73-8.118-6.61-19.106-15.157-30.454-21.618-8.332-4.668-18.312-9.625-28.87-14.437a811.914 811.914 0 00-37.563-15.871c-10.129-3.953-20.973-7.828-31.602-11.348l-1.293-.433c-6.894-2.227-13.644-4.38-20.039-6.247a692.927 692.927 0 01-10.558 3.016c-2.367.645-4.739 1.293-7.11 1.797-5.886 1.219-11.633 2.008-17.02 2.8-9.84 1.364-18.6 2.587-25.355 6.321-5.672 3.16-8.617 8.617-11.562 14.219-3.23 6.035-6.535 12.137-13.285 16.16v.07c-5.961 3.45-13.36 6.25-21.477 8.477-9.336 2.586-19.535 4.379-29.52 5.601h-.214c-8.832 1.079-18.961.36-29.016-.359-7.469-.504-14.937-1.078-21.687-.789-3.594.07-6.97.43-10.055 1.078-10.703 2.367-21.836 9.336-30.168 14.867-1.074.79-2.152 1.434-3.086 2.153-3.16 2.082-5.746 3.879-7.688 4.882l-1.218-2.222-1.223 2.222c-1.867-1.003-4.523-2.8-7.613-4.882a108.265 108.265 0 00-3.16-2.153c-8.328-5.531-19.391-12.5-30.164-14.867-3.016-.648-6.391-1.008-9.91-1.078-6.75-.29-14.294.285-21.837.789-10.054.719-20.18 1.438-29.015.36h-.14c-9.985-1.223-20.255-3.016-29.594-5.602-8.114-2.227-15.512-5.027-21.473-8.477v-.07c-6.75-4.023-9.985-10.125-13.215-16.16-3.016-5.602-5.96-11.059-11.563-14.219-6.753-3.734-15.585-4.957-25.355-6.32-5.96-.864-12.207-1.727-18.672-3.16a216.143 216.143 0 01-5.531-1.438c-3.805-1.078-7.828-2.226-11.992-3.52-6.25 1.868-12.785 3.95-19.535 6.106l-3.235 1.078a654.153 654.153 0 00-31.672 11.348c-11.996 4.738-25.21 10.27-37.562 15.87-10.559 4.813-20.543 9.77-28.871 14.438-12.426 7.036-24.348 16.59-32.68 23.414l-1.223.934c-1.433 1.219-2.8 2.297-4.02 3.3 1.294 1.009 2.802 2.227 4.454 3.595l1.078.859c8.402 6.824 20.828 16.95 33.899 24.348 8.257 4.668 18.312 9.625 28.87 14.437a811.912 811.912 0 0037.563 15.871c10.129 4.024 20.973 7.828 31.602 11.348 12.351 4.094 24.418 7.758 34.761 10.629 1.868.504 3.735 1.008 5.532 1.437 5.457-1.148 10.699-1.867 15.726-2.586 1.508-.214 3.02-.359 4.453-.574 8.043-1.219 15.157-2.586 20.903-5.746 1.507-.86 2.87-1.867 4.02-3.016 3.234-3.09 5.386-7.109 7.542-11.203 3.23-6.035 6.535-12.14 13.215-16.16h.07v-.074c5.961-3.445 13.36-6.246 21.477-8.473 9.336-2.586 19.535-4.383 29.516-5.601h.218c8.832-1.078 18.887-.36 29.016.36 4.883.358 9.766.718 14.433.858 6.25.145 12.211-.07 17.31-1.148 11.491-2.512 23.487-10.34 31.96-16.086l1.293-.934c3.16-2.085 5.746-3.878 7.688-4.886zm231.77 76.059a743.967 743.967 0 0131.597 9.695c10.633 3.52 21.547 7.399 31.891 11.422 11.992 4.738 25.281 10.34 37.777 16.016 10.774 4.957 20.973 9.91 29.305 14.652 13.43 7.54 26.07 17.883 34.617 24.848a203.854 203.854 0 005.532 4.453l.214-.215.5.719c.36.289.72.574 1.008.789l-.215.36.215.214.07.145 1.438 1.941c-1.867 1.363-4.453 3.445-7.469 5.96-8.547 7.04-21.117 17.31-34.402 24.923-.074 0-.074.07-.145.07-8.476 4.813-18.672 9.84-29.375 14.797-12.425 5.746-25.566 11.273-37.562 16.016h-.07c-11.133 4.523-22.985 8.691-34.403 12.425a919.472 919.472 0 01-32.394 10.055c-8.403 2.441-16.516 3.52-24.059 4.524-9.84 1.363-18.672 2.585-25.426 6.39-5.672 3.16-8.617 8.692-11.562 14.293-3.23 6.176-6.535 12.281-13.285 16.375-5.891 3.52-13.29 6.32-21.262 8.621-9.336 2.586-19.606 4.38-29.734 5.672-8.832 1.149-18.957.36-29.157-.36-7.468-.5-15.011-1.003-21.836-.788-3.52.144-6.894.43-9.98 1.148-10.703 2.3-21.836 9.336-30.168 15.012-1.074.719-2.082 1.363-3.016 2.011-3.16 2.227-5.816 4.02-7.757 5.028l-1.22-2.227-1.222 2.227c-1.937-1.008-4.523-2.8-7.683-5.028-1.004-.648-2.012-1.367-3.09-2.082-8.328-5.605-19.391-12.64-30.164-14.94-3.016-.72-6.32-1.005-9.84-1.15-6.82-.288-14.434.29-21.977.79-10.125.718-20.324 1.508-29.086.36-10.129-1.294-20.398-3.087-29.734-5.673-8.047-2.3-15.371-5.101-21.332-8.62-6.75-4.095-9.985-10.2-13.215-16.376-3.016-5.601-5.96-11.133-11.563-14.293h-.074c-6.75-3.805-15.511-5.027-25.351-6.39-7.543-1.004-15.73-2.083-24.133-4.524-9.84-2.875-21.043-6.32-32.39-10.055-11.419-3.734-23.2-7.902-34.403-12.425-11.992-4.743-25.211-10.27-37.633-16.016-10.703-4.957-20.902-9.984-29.375-14.797 0 0-.074-.07-.144-.07-13.215-7.614-25.786-17.883-34.332-24.922-2.227-1.797-4.165-3.375-5.747-4.598l-.214.145-.5-.719c-.36-.289-.72-.574-1.008-.789l.215-.29-.215-.284L0 567.133c1.797-1.293 4.309-3.301 7.254-5.746 8.547-6.965 21.187-17.309 34.617-24.848 8.332-4.742 18.531-9.695 29.305-14.652a840.097 840.097 0 0137.777-16.016c10.344-4.023 21.258-7.902 31.887-11.422 11.637-3.804 23.055-7.324 33.11-10.125-9.696-2.8-20.54-6.105-31.598-9.77-10.633-3.515-21.547-7.394-31.891-11.417-12.066-4.739-25.281-10.27-37.852-16.016-10.699-4.883-20.898-9.91-29.23-14.578v-.074c-13.43-7.54-26.07-17.883-34.617-24.852-3.016-2.441-5.457-4.449-7.254-5.742l.719-1.078-.72-1.008L0 397.707c1.797-1.293 4.309-3.305 7.254-5.746 8.547-6.965 21.187-17.309 34.617-24.848 8.332-4.742 18.531-9.695 29.305-14.652 12.496-5.676 25.781-11.277 37.777-15.945 10.344-4.094 21.258-7.973 31.887-11.493a1246.893 1246.893 0 0115.586-4.953 780.634 780.634 0 01-14.074-4.527 642.295 642.295 0 01-31.891-11.418c-12.066-4.742-25.281-10.27-37.852-16.016-10.699-4.882-20.898-9.914-29.23-14.582v-.07c-13.43-7.543-26.07-17.883-34.617-24.852-2.082-1.722-3.95-3.23-5.532-4.378l-.214.144-.5-.719c-.36-.289-.72-.574-1.008-.793l.215-.285-.215-.289L0 240.203c1.867-1.363 4.453-3.445 7.469-5.96 8.547-7.04 21.117-17.31 34.402-24.923 0 0 .074-.07.145-.07 8.402-4.813 18.601-9.84 29.375-14.797 12.425-5.746 25.566-11.273 37.562-16.016h.07c11.133-4.523 22.985-8.69 34.403-12.425 11.277-3.735 22.48-7.11 32.394-10.055 8.403-2.371 16.516-3.52 24.059-4.523 9.84-1.368 18.672-2.586 25.426-6.395 5.672-3.16 8.617-8.687 11.562-14.289 3.23-6.18 6.535-12.355 13.215-16.379h.07c5.891-3.516 13.215-6.32 21.262-8.617 9.336-2.586 19.606-4.453 29.73-5.746 8.766-1.004 18.82-.285 28.876.36 7.539.573 15.007 1.077 21.832.862 3.664-.144 7.109-.503 10.27-1.148 10.702-2.371 21.905-9.41 30.167-15.012 1.074-.718 2.082-1.363 3.016-2.011 3.16-2.153 5.746-3.95 7.757-5.028l1.22 2.227 1.148-2.227c2.011 1.078 4.597 2.875 7.757 5.028.934.648 1.938 1.293 3.016 2.011 8.332 5.602 19.465 12.64 30.164 15.012 3.16.645 6.61 1.004 10.2 1.148 6.824.215 14.367-.289 21.906-.863 10.054-.644 20.109-1.363 28.87-.36 10.13 1.294 20.4 3.161 29.735 5.747 8.047 2.297 15.371 5.101 21.332 8.617 6.75 4.024 9.985 10.2 13.215 16.379 2.945 5.602 5.96 11.129 11.563 14.29 6.753 3.808 15.585 5.026 25.425 6.394 7.543 1.004 15.657 2.152 24.059 4.523h.074c9.84 2.945 21.043 6.32 32.32 10.055 11.418 3.734 23.27 7.902 34.403 12.425h.07c11.992 4.743 25.137 10.27 37.563 16.016 10.773 4.957 20.972 9.984 29.375 14.797.07 0 .144.07.144.07 13.285 7.614 25.856 17.883 34.402 24.922 2.153 1.797 4.094 3.375 5.747 4.598l.214-.145.5.72c.36.284.72.573 1.008.788l-.215.29.215.284.07.145 1.438 1.937c-1.797 1.293-4.309 3.38-7.254 5.746-8.547 6.97-21.187 17.31-34.617 24.852v.07c-8.402 4.668-18.531 9.7-29.305 14.582-12.566 5.746-25.781 11.274-37.777 16.016-10.344 4.023-21.258 7.898-31.887 11.418-5.316 1.727-10.488 3.45-15.586 4.957a812.474 812.474 0 0114.074 4.523c10.633 3.52 21.547 7.399 31.891 11.493 11.992 4.668 25.281 10.27 37.777 15.945 10.774 4.957 20.973 9.91 29.305 14.652 13.43 7.54 26.07 17.883 34.617 24.848 2.946 2.441 5.457 4.453 7.254 5.746l-.789 1.078.79 1.004.07.145 1.437 1.941c-1.797 1.293-4.309 3.3-7.254 5.742-8.547 6.969-21.187 17.313-34.617 24.852v.074c-8.402 4.668-18.531 9.695-29.305 14.578-12.566 5.746-25.781 11.277-37.777 16.016-10.344 4.023-21.258 7.902-31.887 11.418-11.637 3.879-23.055 7.328-33.11 10.199zM404.28 242.285c-1.652.934-3.664 2.3-6.031 3.953-8.836 5.961-21.977 14.938-35.05 17.739-9.552 2.082-21.188 1.222-32.895.43h-.36c-9.84-.72-19.675-1.434-28.007-.43 0 0-.075.07-.145.07-9.84 1.152-19.824 2.945-28.871 5.387-7.613 2.086-14.582 4.742-20.184 7.972-5.531 3.305-8.402 8.836-11.347 14.223a166.086 166.086 0 01-1.938 3.59c-2.8 4.957-6.035 9.55-11.637 12.71-7.613 4.239-16.879 5.462-27.148 6.895-7.398 1.008-15.297 2.156-23.484 4.453-.864.29-1.797.504-2.73.793 1.437.43 2.874.86 4.237 1.22a130.31 130.31 0 0012.856 2.874c3.59.645 7.183 1.074 10.629 1.578 10.27 1.438 19.465 2.73 27.078 6.895 6.965 3.879 10.27 10.054 13.644 16.304 2.875 5.457 5.82 10.918 11.278 14.22h.07c5.531 3.234 12.57 5.89 20.184 7.972 8.976 2.515 18.96 4.238 28.8 5.46h.215c8.258 1.005 18.172.36 28.008-.359 3.305-.214 6.61-.504 9.84-.648 8.406-.43 16.45-.5 23.344 1.008 13.144 2.87 26.285 11.777 35.12 17.808 2.372 1.582 4.38 2.946 5.962 3.953a359.671 359.671 0 006.031-3.953c8.836-6.03 21.977-14.937 35.05-17.808 6.966-1.508 15.083-1.438 23.485-1.008 3.23.144 6.465.434 9.695.648 9.915.72 19.75 1.364 28.012.36h.215c9.84-1.223 19.824-2.946 28.8-5.461 7.684-2.082 14.653-4.738 20.255-7.973 5.531-3.3 8.402-8.762 11.347-14.219 3.305-6.25 6.606-12.425 13.575-16.304 7.613-4.164 16.879-5.457 27.148-6.895 2.871-.36 5.816-.789 8.832-1.293 4.742-.789 9.625-1.722 14.582-3.16h.07c.864-.285 1.797-.5 2.73-.789-1.437-.43-2.874-.79-4.237-1.223-8.188-2.297-16.086-3.445-23.485-4.453-10.27-1.433-19.535-2.656-27.078-6.894-5.746-3.16-9.05-7.899-11.851-13-.575-1.075-1.22-2.153-1.793-3.301-2.875-5.387-5.82-10.918-11.348-14.223-5.602-3.23-12.57-5.886-20.184-7.972-9.047-2.442-19.03-4.235-28.8-5.387-.07 0-.141-.07-.215-.07-8.332-1.004-18.172-.29-28.008.43h-.074c-11.852.792-23.559 1.652-33.11-.43h-.07c-13.074-2.872-26.215-11.778-35.05-17.739-2.372-1.652-4.38-3.02-5.962-3.953zm0 0"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )    
};

export default Grafism;