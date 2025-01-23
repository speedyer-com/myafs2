import React from 'react';
import { useLocation } from 'react-router-dom';

const contentMap = {
  '/planning': 'https://docs.google.com/document/d/e/planning/pub?embedded=true',
  '/requirements': 'https://docs.google.com/document/d/e/requirements/pub?embedded=true',
  '/design': 'https://docs.google.com/document/d/e/design/pub?embedded=true',
  '/coding': 'https://docs.google.com/document/d/e/coding/pub?embedded=true',
  '/testing': 'https://docs.google.com/document/d/e/testing/pub?embedded=true',
  '/deployment': 'https://docs.google.com/document/d/e/deployment/pub?embedded=true',
  '/maintenance': 'https://docs.google.com/document/d/e/maintenance/pub?embedded=true',
  '/dashboard': 'https://docs.google.com/document/d/e/dashboard/pub?embedded=true',
  '/projects': 'https://docs.google.com/document/d/e/projects/pub?embedded=true',
  '/calendar': 'https://docs.google.com/document/d/e/calendar/pub?embedded=true',
  '/messages': 'https://docs.google.com/document/d/e/messages/pub?embedded=true',
  '/documents': 'https://docs.google.com/document/d/e/documents/pub?embedded=true',
  '/analytics': 'https://docs.google.com/document/d/e/analytics/pub?embedded=true',
  '/tasks': 'https://docs.google.com/document/d/e/tasks/pub?embedded=true',
  '/settings': 'https://docs.google.com/document/d/e/settings/pub?embedded=true',
  '/help': 'https://docs.google.com/document/d/e/help/pub?embedded=true',
  '/notifications': 'https://docs.google.com/document/d/e/notifications/pub?embedded=true',
  '/catalog': 'https://docs.google.com/document/d/e/catalog/pub?embedded=true',
  '/templates': 'https://docs.google.com/document/d/e/templates/pub?embedded=true',
  '/documentation': 'https://docs.google.com/document/d/e/documentation/pub?embedded=true',
  '/explore': 'https://docs.google.com/document/d/e/explore/pub?embedded=true',
  '/create': 'https://docs.google.com/document/d/e/create/pub?embedded=true',
};

export default function ContentView() {
  const location = useLocation();
  const contentUrl = contentMap[location.pathname as keyof typeof contentMap] || 
    'https://docs.google.com/document/d/e/2PACX-1vQXfwkPlxUhemZxzXrJkXNJgR9VWkHZV0Y7HMVcSvaCrBzzzWmGGRqJqbRWXIvKYQ/pub?embedded=true';

  return (
    <div className="w-full h-[calc(100vh-5rem)] rounded-lg border border-gray-200 bg-white overflow-hidden">
      <iframe
        src={contentUrl}
        className="w-full h-full"
        title="Main content"
      />
    </div>
  );
}