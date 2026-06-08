src
├── api
│   ├── client.ts
│   ├── auth.api.ts
│   ├── attendance.api.ts
│   ├── assignment.api.ts
│   ├── journal.api.ts
│   └── evaluation.api.ts
|
├── assets
│   ├── images
│   ├── icons
│   └── fonts
src
├── components
│   ├── AppButton.tsx
│   ├── AppInput.tsx
│   ├── Loading.tsx
│   └── EmptyState.tsx
|
├── constants
│   ├── colors.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── roles.ts
|
src
├── hooks
│   ├── useAuth.ts
│   ├── useAttendance.ts
│   └── useAssignments.ts
|
src
├── navigation
│   ├── RootNavigator.tsx
│   ├── AuthStack.tsx
│   ├── TeacherTabs.tsx
│   ├── ParentTabs.tsx
│   └── StudentTabs.tsx
|
├── screens
│   ├── auth
│   ├── attendance
│   ├── assignment
│   ├── journal
│   ├── evaluation
│   └── profile
│
├── store
│   └── auth.store.ts
│
├── types
│   ├── auth.ts
│   ├── attendance.ts
│   ├── assignment.ts
│   └── common.ts
|
├── utils
│   ├── date.ts
│   ├── format.ts
│   ├── storage.ts
│   └── validation.ts


Semua HTTP/API masuk ke 'api/ folder'
Semua screen masuk ke 'screens/ folder'
Shared UI masuk ke 'components/ folder'
State global masuk ke 'store/ folder'
TypeScript interfaces/types masuk ke 'types/ folder'
Helper functions masuk ke 'utils/ folder'
Navigation masuk ke 'navigation/ folder'