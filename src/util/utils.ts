/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-28 17:08:24
 * @Description: 
 */

import invariant from "invariant";

/**
 * 1. suppose to pass
 * {
 *  b: ['a'],
 *  c: ['b'],
 *}
 *
 * 2. suppose to throw error
 *{
 *  b: ['a'],
 *  c: ['b'],
 *  a: ['c'],
 *}
 */
export function checkLoopDependencies(graph: any) {

  function travel(graph: any, s: string) {
    if (onpath[s]) {
      hasCircle = true;
    }
    if (visited[s] || hasCircle) {
      return;
    }
    visited[s] = true;
    onpath[s] = true;
    for (let i = 0; i < graph[s]?.length; i++) {
      const t = graph[s][i];
      travel(graph, t);
    }
    onpath[s] = false;
  }

  let hasCircle = false;
  const visited: Record<string, boolean> = {};
  const onpath: Record<string, boolean> = {};

  Object.keys(graph).forEach(key => {
    travel(graph, key);
  })

  invariant(!hasCircle, "the dependencies has circle loop");
}