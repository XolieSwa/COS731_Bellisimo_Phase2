package org.cos731.Bellisimo.dao;

import java.util.List;

import org.cos731.Bellisimo.model.CartInfo;
import org.cos731.Bellisimo.model.OrderDetailInfo;
import org.cos731.Bellisimo.model.OrderInfo;
import org.cos731.Bellisimo.model.PaginationResult;

public interface OrderDAO {

    public void saveOrder(CartInfo cartInfo);

    public PaginationResult<OrderInfo> listOrderInfo(int page,
                                                     int maxResult, int maxNavigationPage);

    public OrderInfo getOrderInfo(String orderId);

    public List<OrderDetailInfo> listOrderDetailInfos(String orderId);

}