//
//  CustomListViewManager.m
//  RNUicollectionViewListApp
//
//  Created by Rahul Verma on 07/03/22.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import "RNUicollectionViewListApp-Swift.h"

@interface CustomListViewManager: RCTViewManager
@end

@implementation CustomListViewManager
RCT_EXPORT_MODULE()

- (UIView *) view {
  CustomListView *view = [[CustomListView alloc] init];
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(data, NSArray)


@end
