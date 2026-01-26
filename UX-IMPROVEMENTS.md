# Task Interaction UX Improvements

## Current Issues (As seen in screenshot):
1. Tasks don't look clickable - no hover states or visual cues
2. Timer is separate from tasks (Sound Alerts button is standalone)
3. No way to focus on a single task
4. Sound toggle should be on timer widget, not modal header

## Proposed Solution:

### 1. Make Tasks Interactive Cards

Each task should:
- Have clear hover state (border glow, slight elevation)
- Cursor changes to pointer
- Visual "click to expand" indicator
- When clicked, opens focused task popup

### 2. Redesign Task Display

```
[Checkbox] Task Title                    [⏱️ 10 min] [Start Timer]
           Task description...
           
           Click anywhere to work on this task →
```

### 3. Task Focus Popup

When clicking a task:
- Modal dims current day view
- Task expands to large centered card
- Shows:
  - Task title
  - Full description
  - Large timer (if has duration)
  - Writing area for that specific task
  - Mark complete button
  - Close to return

### 4. Timer Integration

- Remove standalone "Sound Alerts" button from modal header
- Add timer controls directly on each task card
- Show timer button prominently for tasks with durations
- When timer starts, floating widget appears with sound toggle built-in

### 5. Visual Indicators

Add to each task card:
```
┌─────────────────────────────────────┐
│ ☐ Task Title            ⏱️ 10 min   │ ← Timer badge
│                                     │
│ Description text here...            │
│                                     │
│ [▶ Start Timer] [💭 Work on This]  │ ← Clear action buttons
└─────────────────────────────────────┘
  ↑ Hover: glow border, lift effect
```

## CSS Changes Needed:

1. `.task-item` - Add pointer cursor, hover transform
2. `.task-timer-btn` - Make more prominent
3. Add `.task-work-btn` - "Work on This" button
4. `.audio-toggle.mini` - Smaller version for timer widget
5. `.task-focus-popup` - New modal for focused task

## JavaScript Changes:

1. `openTaskFocus(task, dayNumber, taskIndex)` - New function
2. Update `startTaskTimer()` - Check `audioToggleTimer` instead
3. Add click handlers to task cards
4. Render timer button more prominently

## Implementation Priority:

1. ✅ Move sound toggle to timer widget
2. ✅ Make tasks visually clickable
3. ✅ Add "Work on This" button to each task
4. ✅ Create task focus popup
5. ✅ Integrate timer into task cards

Would you like me to implement these changes step by step?
